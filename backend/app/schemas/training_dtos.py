from datetime import date
from enum import Enum

from pydantic import BaseModel

    
class BaseDto(BaseModel):
    id: str
    name: str
    notes: str | None


class ProgramDto(BaseDto):
    label: str | None
    create_date: date


class TrainingDto(BaseDto):
    day_of_the_week: Enum | None
    order: int
    

class ExerciseDto(BaseDto):
    intensity: Enum
    order: int


class ActivityDto(BaseModel):
    id: str
    create_date: date
    alternate_exercise: str | None
    sets: str
