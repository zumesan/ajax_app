Rails.application.routes.draw do
  root to: 'posts#index' #rootパスへ飛んだときにpostsコントローラーのindexアクションを実行
  post 'posts', to: 'posts#create' #postメソッドでpostsURLをリクエストし、postsコントローラーのクリエイトアクションを実行
end
