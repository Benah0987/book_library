Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://localhost:3000" # ✅ Replace with your frontend URL
      resource "*",
        headers: :any,
        credentials: true, # ✅ Allow sending session cookies
        methods: [:get, :post, :patch, :delete, :options]
    end
  end
  