import os
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from settings import DATABASE_FALLBACK_URL

DATABASE_URL = os.getenv("DATABASE_URL", DATABASE_FALLBACK_URL)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
