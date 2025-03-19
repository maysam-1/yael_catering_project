from sqlalchemy.orm import Session
from fastapi import HTTPException
from ..models.user_model import User

def login(db: Session, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found.")  # 404 for incorrect username

    if user.password != password:
        raise HTTPException(status_code=401, detail="Incorrect password.")  # 401 for wrong password

    return user
