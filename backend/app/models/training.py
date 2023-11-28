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
from uuid import uuid4


class BaseInfo(Base):
    __abstract__ = True

    id = Column(String(36), primary_key=True, index=True, default=uuid4())
    name = Column(String(100), index=True, nullable=False)
    notes = Column(Text, default=None)


class Program(BaseInfo):
    __tablename__ = "programs"

    label = Column(String(16), default=None)
    create_date = Column(Date, nullable=False, default=date.today())
    trainings = relationship("Training", backref="programs", cascade="all, delete")


class Training(BaseInfo):
    __tablename__ = "trainings"

    day_of_the_week = Column(Enum(Weekday), default=None)
    order = Column(SmallInteger, nullable=False)
    program_id = Column(String(36), ForeignKey("programs.id"), nullable=False)
    exercises = relationship("Exercise", backref="trainings", cascade="all, delete")

    __table_arg__ = UniqueConstraint("order", "program_id", name="_order_program_uc")


class Exercise(BaseInfo):
    __tablename__ = "exercises"

    intensity = Column(Enum(ExerciseIntensity), nullable=False)
    order = Column(SmallInteger, nullable=False)
    training_id = Column(String(36), ForeignKey("trainings.id"), nullable=False)
    activities = relationship("Activity", backref="exercises", cascade="all, delete")

    __table_arg__ = UniqueConstraint("order", "training_id", name="_order_training_uc")


class Activity(Base):
    __tablename__ = "activities"

    id = Column(String(36), primary_key=True, index=True, default=uuid4())
    create_date = Column(Date, nullable=False, default=date.today())
    alternate_exercise = Column(String(100), default=None)
    sets = Column(JSON, nullable=False)
    exercise_id = Column(String(36), ForeignKey("exercises.id"), nullable=False)
