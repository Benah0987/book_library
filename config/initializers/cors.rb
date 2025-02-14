Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:3000"  # Change this to match your frontend
    resource "*",
      headers: :any,
      methods: [:get, :post, :patch, :delete, :options],
      credentials: true  # ✅ Allows cookies/session persistence
  end
end
