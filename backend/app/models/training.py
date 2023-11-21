from sqlalchemy import Column, Integer, String
from app.db.base import Base


class Exercise(Base):
    __tablename__ = "exercise"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
