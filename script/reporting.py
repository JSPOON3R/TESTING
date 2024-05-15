import requests
import csv
from datetime import datetime, timedelta
import gspread

# API endpoint URL
api_url = "https://surfly.com/v2/sessions/?api_key=a69e09988d8d46a1a6b11ad7245eb023"


# Google Sheets document name
sheet_name = 'Sessions Log Report'

# Function to make a GET request and retrieve data from the API
def get_api_data():
    response = requests.get(api_url)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch data from API. Status code: {response.status_code}")
        return None

# Function to authenticate with Google Sheets API
def authenticate_google_sheets():
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
    gc = gspread.authorize(credentials)
    return gc.open(sheet_name).sheet1  # Assuming you are using the first sheet

# Function to append new data to the Google Sheet
def append_to_google_sheet(sheet, new_data):
    # Append new data to the Google Sheet
    for row in new_data:
        # Convert dates and times to readable format
        row["start_time"] = datetime.strptime(row["start_time"], "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%d-%m-%Y %H:%M:%S")
        row["end_time"] = datetime.strptime(row["end_time"], "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%d-%m-%Y %H:%M:%S")

        # Convert duration, waiting_time, and actual_duration to minutes
        row["duration"] = round(float(row["duration"]) / 60, 2)
        row["waiting_time"] = round(float(row["waiting_time"]) / 60, 2)
        row["actual_duration"] = round(float(row["duration"]) - float(row["waiting_time"]), 2)

        # Append the row to the Google Sheet
        sheet.append_row(list(row.values()))

# Function to run the daily process
def daily_process():
    # Authenticate with Google Sheets API
    google_sheet = authenticate_google_sheets()

    # Make a GET request to the API and get new data
    new_data = get_api_data()

    if new_data:
        # Append new data to the Google Sheet
        append_to_google_sheet(google_sheet, new_data)
        print("Data appended to the Google Sheet.")
    else:
        print("No data appended to the Google Sheet.")

if __name__ == "__main__":
    # Run the daily process
    daily_process()
