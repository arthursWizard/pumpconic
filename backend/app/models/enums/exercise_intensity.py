from enum import StrEnum


class ExerciseIntensity(StrEnum):
    """
    Indicates proposed intensity one should put while doing an exercise
    """
    
    Strength = "Strength"
    """Should do about 5 sets of 4 reps"""
    
    Hypertrophy = "Hypertrophy"
    """Should do about 4 sets of 8 reps"""
    
    Endurance = "Endurance"
    """Should do about 3 sets of 15 reps"""
