## 本地运行

1. 尽量使用 Python3.4 以上版本以及 1.9 <= django < 1.0 

2. 创建 virtualenv

   $ virtualenv zinnia_blog_env

3. 激活虚拟环境

4. 克隆代码到本地：

   git clone https://github.com/shawdada/nycms.git

5. 进入到 ZinniaBlog 目录下，安装依赖

   pip install -r requirements.txt

6. 在 ZinniaBlog 目录下（与 manage.py 同级）建立一个 database 目录

7. 迁移数据库

   python manage.py migrate

8. 运行本地服务器

   python manage.py runserver

9. 浏览器输入 http://127.0.0.1:8000/

10. 创建后台管理员账户

   python manage.py createsuperuser

11. 浏览器输入 http://127.0.0.1:8000/admin 登录后台

