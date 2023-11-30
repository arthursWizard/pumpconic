from datetime import date
from pydantic import BaseModel


class ProgramBase(BaseModel):
    name: str
    notes: str | None
    label: str | None


class ProgramCreate(ProgramBase):
    pass

class Program(ProgramBase):
    id: str
    create_date: date

    class Config:
        form_attribute = True
