from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.training_dtos import ActivityDto, ExerciseDto, ProgramDto, TrainingDto

from app.services.training import get_activities, get_exercises, get_programs, get_trainings


router = APIRouter(
    prefix="/training"
)


@router.get("/programs")
def fetch_programs(db: Session = Depends(get_db)) -> List[ProgramDto]:
    return get_programs(db)


@router.get("/trainings")
def fetch_trainings(db: Session = Depends(get_db)) -> List[TrainingDto]:
    return get_trainings(db)


@router.get("/exercises")
def fetch_exercises(db: Session = Depends(get_db)) -> List[ExerciseDto]:
    return get_exercises(db)


@router.get("/activities")
def fetch_activities(db: Session = Depends(get_db)) -> List[ActivityDto]:
    return get_activities(db)
