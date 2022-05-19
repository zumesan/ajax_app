class PostsController < ApplicationController #application_controllerを継承

  def index
    @posts = Post.order(id:"DESC") #Postモデルのidをorderメソッドで降順にして、インスタンス変数@postsに代入
  end #index.html.erbファイルへ飛ぶ

  #def new
  #end

  def create
    post = Post.create(content: params[:content]) #保存
    render json:{ post: post } #jsonオプションで変数postの値をpost:キーとセットで JavaScriptファイルに返却
  end
end
