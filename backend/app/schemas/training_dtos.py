from datetime import date
from enum import Enum

from pydantic import BaseModel


class IdDto(BaseModel):
    id: str

    
class BaseDto(BaseModel):
    name: str
    notes: str | None


class ProgramCreateDto(BaseDto):
    label: str | None


class ProgramDto(IdDto, ProgramCreateDto):
    create_date: date


class TrainingCreateDto(BaseDto):
    day_of_the_week: Enum | None
    order: int


class TrainingDto(IdDto, TrainingCreateDto):
    pass
    

class ExerciseCreateDto(BaseDto):
    intensity: Enum
    order: int


class ExerciseDto(IdDto, ExerciseCreateDto):
    pass


class ActivityCreateDto(BaseModel):
    alternate_exercise: str | None
    sets: str
    

class ActivityDto(IdDto, ActivityCreateDto):
    create_date: date
