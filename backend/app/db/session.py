
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

DATABASE_URL = "mysql+mysqlconnector://root:root@localhost:3306/pumpconic_development"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
