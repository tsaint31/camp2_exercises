curl -H "Content-Type: application/json" -X POST "https://postman-echo.com/post" -d '{"foo":"bar"}' | jq '.json' > 03_postman_api_post.result
