class PostsController < ApplicationController #application_controllerを継承

  def index
    @posts = Post.order(id:"DESC") #Postモデルのidをorderメソッドで降順にして、インスタンス変数@postsに代入
  end #index.html.erbファイルへ飛ぶ

  #def new
  #end

  def create
    Post.create(content: params[:content]) #保温
    redirect_to action: :index #保存後にトップページへリダイレクトする。
  end
end
