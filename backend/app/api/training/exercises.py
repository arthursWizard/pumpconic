from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.training.exercise import Exercise, ExerciseCreate
from app.services.training.exercise import s_create_exercise, s_delete_exercise, s_get_exercise, s_get_exercises, s_update_exercise


router = APIRouter(
    prefix="/exercises"
)


@router.get("/", response_model=list[Exercise])
def get_exercises(db: Session = Depends(get_db)):
    """
    Returns the list of all available exercises.
    """
    
    return s_get_exercises(db)


@router.get("/{exercise_id}", response_model=Exercise)
def get_exercise(exercise_id: str, db: Session = Depends(get_db)):
    """
    Returns an exercise with specified Id.
    If the exercise is not found, exception will be raised.
    """
    
    db_exercise = s_get_exercise(db, exercise_id)
    if (db_exercise is None):
        raise HTTPException(status_code=404, detail=f"Exercise with id {exercise_id} was not found")
    return db_exercise

@router.post("/", response_model=Exercise)
def create_exercise(exercise: ExerciseCreate, db: Session = Depends(get_db)):
    """
    Creates a new exercise instance in db and returns created instance.
    """
    
    return s_create_exercise(db, exercise)


@router.put("/{exercise_id}", response_model=Exercise)
def update_exercise(exercise_id: str, exercise: ExerciseCreate, db: Session = Depends(get_db)):
    """
    Updates existing exercise in the db with new information and returns the updated instance.
    If the exercise is not found, exception will be raised.
    """

    db_exercise = s_update_exercise(db, exercise_id, exercise)
    if (db_exercise is None):
        raise HTTPException(status_code=404, detail=f"Exercise with id {exercise_id} was not found")
    return db_exercise


@router.delete("/{exercise_id}", status_code=204)
def delete_exercise(exercise_id: str, db: Session = Depends(get_db)):
    """
    Deletes exercise from the db.
    If the exercise is not found, exception will be raised.
    """

    success = s_delete_exercise(db, exercise_id)
    if (not success):
        raise HTTPException(status_code=404, detail=f"Exercise with id {exercise_id} was not found")
    return {"ok": True}

