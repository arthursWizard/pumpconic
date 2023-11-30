from sqlalchemy.orm import Session
from app.models.training import Training
from app.schemas.training.training import TrainingCreate
from app.utils.update_db_model import update_db_model


def s_get_trainings(db: Session) -> list[Training]:
    return db.query(Training).all()

def s_get_training(db: Session, training_id: str) -> Training | None:
    return db.query(Training).get(training_id)

def s_create_training(db: Session, training: TrainingCreate) -> Training:
    db_training = Training(**vars(training))
    db.add(db_training)
    db.commit()
    db.refresh(db_training)
    return db_training

def s_update_training(db: Session, training_id: str, training: TrainingCreate) -> Training | None:
    db_training = db.query(Training).get(training_id)
    if (db_training is None):
        return None
    update_db_model(db_training, training)
    db.commit()
    db.refresh(db_training)
    return db_training

def s_delete_training(db: Session, training_id: str) -> bool:
    db_training = db.query(Training).get(training_id)
    if (db_training is not None):
        db.delete(db_training)
        db.commit()
        return True
    return False
