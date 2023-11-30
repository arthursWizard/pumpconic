from enum import StrEnum
from pydantic import BaseModel


class ExerciseBase(BaseModel):
    name: str
    notes: str | None
    intensity: StrEnum
    order: int


class ExerciseCreate(ExerciseBase):
    pass

class Exercise(ExerciseBase):
    id: str

    class Config:
        form_attribute = True
