var posts=["2024/06/17/同学板块/","2024/06/15/更新日志/","2024/06/17/老师板块/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };