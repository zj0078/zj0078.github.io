var posts=["2024/wenzhang/vps一键root登录/","2024/wenzhang/PG-DBA-运维手册/","2024/wenzhang/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };