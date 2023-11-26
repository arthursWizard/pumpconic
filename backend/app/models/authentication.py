from sqlalchemy import Column, Integer, String
from app.db.base import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(16), index=True, nullable=False)
    email = Column(String(64), index=True, nullable=False)
    password = Column(String(64), nullable=False)
