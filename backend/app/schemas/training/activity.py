from datetime import date
from pydantic import BaseModel


class ActivityBase(BaseModel):
    alternative_exercise: str | None
    sets: str


class AcitivityCreate(ActivityBase):
    pass

class Activity(ActivityBase):
    id: str
    create_date: date

    class Config:
        form_attribute = True
