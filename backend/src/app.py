from fastapi import FastAPI
# from fastapi.responses import JSONResponse
from .routes.user_routes import router as user_router

# py -m venv env
# env/scripts/activate
# pip install python-dotenv
# pip install fastapi
# pip install uvicorn
# pip install sqlalchemy
# pip install psycopg2
# pip install pydantic
# pip freeze > requirements.txt
# uvicorn src.app:server --reload --port 4000

server = FastAPI()

server.include_router(user_router)

# @server.get("/api/test")
# def test_get(): 
#     json = { "message": "Test" }
#     return JSONResponse(json, status_code = 200)

# @server.post("/api/test")
# def test_post(body: dict):
#     print(body)
#     return JSONResponse(body, status_code = 201)


# @server.post("/api/login")
# def login(body: dict):
#     sql = f"select * from users where username = '{body['username']}' and password = '{body['password']}'"
#     print(sql)
#     return "Done"

