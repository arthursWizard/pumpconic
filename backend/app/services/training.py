from datetime import date
from typing import List

from sqlalchemy.orm import Session
from app.models.training import Program
from app.schemas.training_dtos import ProgramDto, TrainingDto


def get_programs_async(db: Session) -> List[ProgramDto]:
    programs = db.query(Program).all()
    return programs
    bla: ProgramDto = ProgramDto(
        id=1,
        name="Name",
        notes="Notes",
        label="Label",
        create_date=date.today()
    )
    return [
        bla
    ]


def get_trainings_async() -> List[TrainingDto]:
    bla: TrainingDto = TrainingDto(
        id=1,
        name="Training",
        order=1,
        notes=None,
        day_of_the_week=None
    )

    return [bla]
