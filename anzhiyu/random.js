var posts=["2024/07/07/PG-DBA-运维手册/","2024/07/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };