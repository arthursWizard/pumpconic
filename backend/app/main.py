from contextlib import asynccontextmanager
import json
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from app.api import training
from app.db.session import SessionLocal, get_db
from app.models.training import Activity, Exercise, Program, Training



@asynccontextmanager
async def lifespan(_: FastAPI):
    with SessionLocal() as db:
        db.query(Activity).delete()
        db.query(Exercise).delete()
        db.query(Training).delete()
        db.query(Program).delete()
        db.commit()
        with open("fixtures/program.json", "r") as programs:
            data = json.loads(programs.read())
            res = [Program(**x) for x in data]
            for program in res:
                db.add(program)
            db.commit()
        with open("fixtures/training.json", "r") as trainings:
            data = json.loads(trainings.read())
            res = [Training(**x) for x in data]
            for training in res:
                db.add(training)
            db.commit()
        with open("fixtures/exercise.json", "r") as exercises:
            data = json.loads(exercises.read())
            res = [Exercise(**x) for x in data]
            for exercise in res:
                db.add(exercise)
            db.commit()
        with open("fixtures/activity.json", "r") as activities:
            data = json.loads(activities.read())
            res = [Activity(**x) for x in data]
            for activity in res:
                db.add(activity)
            db.commit()
        yield

# app = FastAPI()
app = FastAPI(lifespan=lifespan)
app.include_router(training.router)
