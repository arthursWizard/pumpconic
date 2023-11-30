from sqlalchemy.orm import Session
from app.models.training import Activity
from app.schemas.training.activity import AcitivityCreate
from app.utils.update_db_model import update_db_model


def s_get_activities(db: Session) -> list[Activity]:
    return db.query(Activity).all()

def s_get_activity(db: Session, activity_id: str) -> Activity | None:
    return db.query(Activity).get(activity_id)

def s_create_activity(db: Session, activity: AcitivityCreate) -> Activity:
    db_activity = Activity(**vars(activity))
    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity

def s_update_activity(db: Session, activity_id: str, activity: AcitivityCreate) -> Activity | None:
    db_activity = db.query(Activity).get(activity_id)
    if (db_activity is None):
        return None
    update_db_model(db_activity, activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity

def s_delete_activity(db: Session, activity_id: str) -> bool:
    db_activity = db.query(Activity).get(activity_id)
    if (db_activity is not None):
        db.delete(db_activity)
        db.commit()
        return True
    return False
