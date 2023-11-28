from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.training_dtos import ProgramDto, TrainingDto

from app.services.training import get_programs_async, get_trainings_async


router = APIRouter(
    prefix="/training"
)


@router.get("/programs")
def get_programs(db: Session = Depends(get_db)) -> List[ProgramDto]:
    return get_programs_async(db)


@router.get("/trainings")
def get_trainings() -> List[TrainingDto]:
    return get_trainings_async()
