from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.training.training import Training, TrainingCreate
from app.services.training.training import s_create_training, s_delete_training, s_get_training, s_get_trainings, s_update_training


router = APIRouter(
    prefix="/trainings"
)


@router.get("/", response_model=list[Training])
def get_trainings(db: Session = Depends(get_db)):
    """
    Returns the list of all available training.
    """
    
    return s_get_trainings(db)


@router.get("/{training_id}", response_model=Training)
def get_training(training_id: str, db: Session = Depends(get_db)):
    """
    Returns a training with specified Id.
    If the training is not found, exception will be raised.
    """
    
    db_training = s_get_training(db, training_id)
    if (db_training is None):
        raise HTTPException(status_code=404, detail=f"Training with id {training_id} was not found")
    return db_training

@router.post("/", response_model=Training)
def create_training(training: TrainingCreate, db: Session = Depends(get_db)):
    """
    Creates a new training instance in db and returns created instance.
    """
    
    return s_create_training(db, training)


@router.put("/{training_id}", response_model=Training)
def update_training(training_id: str, training: TrainingCreate, db: Session = Depends(get_db)):
    """
    Updates existing training in the db with new information and returns the updated instance.
    If the traning is not found, exception will be raised.
    """

    db_training = s_update_training(db, training_id, training)
    if (db_training is None):
        raise HTTPException(status_code=404, detail=f"Training with id {training_id} was not found")
    return db_training


@router.delete("/{training_id}", status_code=204)
def delete_training(training_id: str, db: Session = Depends(get_db)):
    """
    Deletes training from the db.
    If the traning is not found, exception will be raised.
    """

    success = s_delete_training(db, training_id)
    if (not success):
        raise HTTPException(status_code=404, detail=f"Training with id {training_id} was not found")
    return {"ok": True}

