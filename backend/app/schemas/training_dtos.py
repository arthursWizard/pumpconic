from datetime import date
from enum import Enum

from pydantic import BaseModel

    
class BaseDto(BaseModel):
    id: int
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


class Activity(BaseModel):
    id: int
    create_date: date
    alternate_exercise: str | None
    sets: str
