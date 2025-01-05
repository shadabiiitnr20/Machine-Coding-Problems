console.log('FlipMed');

class FlipMedDataManager {
  constructor() {
    if (FlipMedDataManager._instance) {
      return FlipMedDataManager._instance;
    }
    this.doctors = [];
    this.patients = [];
    this.appointments = [];
    FlipMedDataManager._instance = this;
  }

  static getInstance() {
    if (FlipMedDataManager._instance) {
      return (FlipMedDataManager._instance = new FlipMedDataManager());
    }
    return FlipMedDataManager._instance;
  }
}

class Doctors {
  constructor(name, id, speciality) {
    this.name = name;
    this.id = id;
    this.speciality = speciality;
    this.rating = 0;
    this.slots = Array(12).fill(false);
  }

  declareAvailability(slotIndex) {
    if (slotIndex < 0 || slotIndex > 12) {
      throw new Error('Slot index is invalid');
    }
    if (this.slots[slotIndex]) {
      throw new Error('Slot is alreadt declared available');
    }
    this.slots[slotIndex] = true;
  }
}

class Patients {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.bookedAppointments = [];
  }

  confirmBooking(doctorId, slotIndex) {
    const flipMedData = FlipMedDataManager.getInstance();
    const doctor = flipMedData.doctors.find((doctor) => doctor.id === doctorId);
    if (!doctor) {
      throw new Error('No doctor with given Id');
    }
    if (!doctor.slots[slotIndex]) {
      throw new Error('Doctor is not available for give slot');
    }
    if (
      this.bookedAppointments.some(
        (apt) => apt.slot === slotIndex && apt.doctorId === doctorId
      )
    ) {
      throw new Error('Appointment is already booked');
    }
    const appointment = {
      doctorId: doctorId,
      doctorName: doctor.name,
      patientName: this.name,
      patientId: this.id,
      slot: slotIndex,
    };

    doctor.slots[slotIndex] = false;
    this.bookedAppointments.push(appointment);
    flipMedData.appointments.push(appointment);
  }

  cancelBooking(doctorId, slotIndex) {
    const flipMedData = FlipMedDataManager.getInstance();
    const doctor = flipMedData.doctors.find((doctor) => doctor.id === doctorId);
    if (!doctor) {
      throw new Error('No doctor with given Id');
    }
    const index = this.bookedAppointments.findIndex(
      (apt) => apt.slot === slotIndex && apt.doctorId === doctorId
    );
    if (index === -1) {
      throw new Error('No booked appointment for this slot index');
    }
    doctor.slots[slotIndex] = true;
    this.bookedAppointments = this.bookedAppointments.filter(
      (apt) => apt.slot !== slotIndex && apt.doctorId !== doctorId
    );
    flipMedData.appointments = flipMedData.appointments.filter(
      (apt) => apt.slot !== slotIndex && apt.doctorId !== doctorId
    );
  }
}

class Scheduler {
  static getDoctorsBySpeciality(speciality) {
    const flipMedData = FlipMedDataManager.getInstance();
    return flipMedData.doctors.filter(
      (doctor) => doctor.speciality === speciality
    );
  }

  static getDoctorsAppointment(doctorId) {
    const flipMedData = FlipMedDataManager.getInstance();
    return flipMedData.appointments.filter((apt) => apt.doctorId === doctorId);
  }

  static getPatientsAppointment(patientId) {
    const flipMedData = FlipMedDataManager.getInstance();
    return flipMedData.appointments.filter(
      (apt) => apt.patientId === patientId
    );
  }
}

// (function demo() {
//   const flipMedData = FlipMedDataManager.getInstance();
//   // console.log(flipMedData);

//   const doc1 = new Doctor(1, 'Smith', 'Cardiologist');
//   const doc2 = new Doctor(2, 'Joe', 'Dermatologist');
//   doc1.declareAvailability(1); //Doc1: 10-11
//   doc1.declareAvailability(2); //Doc1: 11-12
//   doc2.declareAvailability(1); //Doc2: 10-11
//   doc2.declareAvailability(2); //Doc2: 11-12

//   flipMedData.doctors.push(doc1, doc2);
//   // console.log(flipMedData);

//   const pat1 = new Patient(1, 'Travis');
//   const pat2 = new Patient(2, 'Harry');
//   const pat3 = new Patient(3, 'Ricky');

//   flipMedData.patients.push(pat1, pat2, pat3);
//   // console.log(flipMedData);

//   pat1.bookAppointment(1, 2);
//   // console.log(pat1.bookedAppointments);
//   // pat2.bookAppointment(1, 1);
//   pat2.bookAppointment(2, 2);
//   // pat2.cancelAppointment(2, 2);
//   console.log(pat2.bookedAppointments);
//   console.log(flipMedData);

//   const availableDoctors = Scheduler.getDoctorsBySpeciality('Cardiologist');
//   console.log('Available Cardiologists:', availableDoctors);

//   const doctorsAppointments = Scheduler.getDoctorsAppointment(1);
//   console.log(doctorsAppointments);
// })();
