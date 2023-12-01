from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.training.activity import AcitivityCreate, Activity
from app.services.training.activity import s_create_activity, s_delete_activity, s_get_activities, s_get_activity, s_update_activity


router = APIRouter(
    prefix="/activities"
)


@router.get("/", response_model=list[Activity])
def get_activities(db: Session = Depends(get_db)):
    """
    Returns the list of all available activities.
    """
    
    return s_get_activities(db)


@router.get("/{activity_id}", response_model=Activity)
def get_activity(activity_id: str, db: Session = Depends(get_db)):
    """
    Returns a activity with specified Id.
    If the activity is not found, exception will be raised.
    """
    
    db_activity = s_get_activity(db, activity_id)
    if (db_activity is None):
        raise HTTPException(status_code=404, detail=f"Activity with id {activity_id} was not found")
    return db_activity

@router.post("/", response_model=Activity)
def create_activity(activity: AcitivityCreate, db: Session = Depends(get_db)):
    """
    Creates a new activity instance in db and returns created instance.
    """
    
    return s_create_activity(db, activity)


@router.put("/{activity_id}", response_model=Activity)
def update_activity(activity_id: str, activity: AcitivityCreate, db: Session = Depends(get_db)):
    """
    Updates existing activity in the db with new information and returns the updated instance.
    If the activity is not found, exception will be raised.
    """

    db_activity = s_update_activity(db, activity_id, activity)
    if (db_activity is None):
        raise HTTPException(status_code=404, detail=f"Activity with id {activity_id} was not found")
    return db_activity


@router.delete("/{activity_id}", status_code=204)
def delete_activity(activity_id: str, db: Session = Depends(get_db)):
    """
    Deletes activity from the db.
    If the activity is not found, exception will be raised.
    """

    success = s_delete_activity(db, activity_id)
    if (not success):
        raise HTTPException(status_code=404, detail=f"Activity with id {activity_id} was not found")
    return {"ok": True}

