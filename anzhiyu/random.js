var posts=["2024/06/16/老师板块/","2024/06/16/同学板块/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };