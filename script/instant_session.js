// Instant session
(function(s,u,r,f,l,y){s[f]=s[f]||{init:function(){s[f].q=arguments}};
l=u.createElement(r);y=u.getElementsByTagName(r)[0];l.async=1;
l.src='https://surfly.com/surfly.js';y.parentNode.insertBefore(l,y);})
(window,document,'script','Surfly');

var settings = {
    widget_key: "99671227762b43c2a96daa066ee006e2",
    hide_until_agent_joins: true,
    url: "https://www.surfly.com"
};

Surfly.init(settings, function(init) {
if (init.success && !Surfly.isInsideSession) {
    Surfly.session()
    .on("session_created", function(session, event) {
    })
    .startLeader();
}
});

