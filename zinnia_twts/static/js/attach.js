function checkImg(){
var img_id=document.getElementById('attach').value; //根据id得到值
var index= img_id.indexOf("."); //得到"."在第几位
img_id=img_id.substring(index); //截断"."之前的，得到后缀
    if(img_id!=".bmp"&&img_id!=".png"&&img_id!=".gif"&&img_id!=".jpg"&&img_id!=".jpeg"){  //根据后缀，判断是否符合图片格式
          alert("不是指定图片格式,重新选择"); 
         document.getElementById('movie_img').value="";  // 不符合，就清除，重新选择
      }
 }