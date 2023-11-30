from pydantic import BaseModel
from sqlalchemy.orm import DeclarativeMeta


def update_db_model(model: DeclarativeMeta, update: BaseModel) -> None:
    for var, value in vars(update).items():
        setattr(model, var, value)
