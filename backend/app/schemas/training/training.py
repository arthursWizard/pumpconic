from enum import StrEnum
from pydantic import BaseModel


class TrainingBase(BaseModel):
    name: str
    notes: str | None
    day_of_the_week: StrEnum | None
    order: int


class TrainingCreate(TrainingBase):
    pass

class Training(TrainingBase):
    id: str

    class Config:
        form_attribute = True
