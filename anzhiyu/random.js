var posts=["2024/06/16/同学模块/","2024/06/16/老师板块/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };