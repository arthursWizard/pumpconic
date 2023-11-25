from datetime import date
from sqlalchemy import (
    JSON,
    Column,
    Date,
    Enum,
    ForeignKey,
    Integer,
    SmallInteger,
    String,
    Text,
)
from sqlalchemy.orm import relationship
from app.db.base import Base
from app.models.enums.exercise_intensity import ExerciseIntensity
from app.models.enums.weekday import Weekday


class BaseInfo(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True, nullable=False)
    notes = Column(Text, default=None)


class Program(BaseInfo):
    __tablename__ = "program"

    label = Column(String(16), default=None)
    create_date = Column(Date, nullable=False, default=date.today())
    trainings = relationship("Training", backref="program")


class Training(BaseInfo):
    __tablename__ = "training"

    day_of_the_week = Column(Enum(Weekday), default=None)
    order = Column(SmallInteger, unique=True, nullable=False)
    exercises = relationship("Exercise", backref="training")
    program_id = Column(Integer, ForeignKey("program.id"))


class Exercise(BaseInfo):
    __tablename__ = "exercise"

    intensity = Column(Enum(ExerciseIntensity), nullable=False)
    order = Column(SmallInteger, unique=True, nullable=False)
    training_id = Column(Integer, ForeignKey("training.id"))


class Activity(Base):
    create_date = Column(Date, nullable=False, default=date.today())
    alternate_exercise = Column(String(100), default=None)
    sets = Column(JSON, nullable=False)
