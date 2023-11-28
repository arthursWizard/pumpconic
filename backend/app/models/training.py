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
    UniqueConstraint,
)
from sqlalchemy.orm import relationship
from app.db.base import Base
from app.models.enums.exercise_intensity import ExerciseIntensity
from app.models.enums.weekday import Weekday

# TODO: cascade to delete all if parent is deleted


class BaseInfo(Base):
    __abstract__ = True

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True, nullable=False)
    notes = Column(Text, default=None)


class Program(BaseInfo):
    __tablename__ = "programs"

    label = Column(String(16), default=None)
    create_date = Column(Date, nullable=False, default=date.today())
    trainings = relationship("Training", backref="programs")


class Training(BaseInfo):
    __tablename__ = "trainings"

    day_of_the_week = Column(Enum(Weekday), default=None)
    order = Column(SmallInteger, nullable=False)
    program_id = Column(Integer, ForeignKey("programs.id"), nullable=False)
    exercises = relationship("Exercise", backref="trainings")

    __table_arg__ = UniqueConstraint("order", "program_id", name="_order_program_uc")


class Exercise(BaseInfo):
    __tablename__ = "exercises"

    intensity = Column(Enum(ExerciseIntensity), nullable=False)
    order = Column(SmallInteger, nullable=False)
    training_id = Column(Integer, ForeignKey("trainings.id"), nullable=False)
    activities = relationship("Activity", backref="exercises")

    __table_arg__ = UniqueConstraint("order", "training_id", name="_order_training_uc")


class Activity(Base):
    __tablename__ = "activities"

    id = Column(Integer, primary_key=True, index=True)
    create_date = Column(Date, nullable=False, default=date.today())
    alternate_exercise = Column(String(100), default=None)
    sets = Column(JSON, nullable=False)
    exercise_id = Column(Integer, ForeignKey("exercises.id"), nullable=False)
