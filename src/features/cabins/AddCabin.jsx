import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import CabinTable from './CabinTable';
import Modal from '../../ui/Modal';

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// Best Practice:
// - The Problem : We dont want the component who uses the modal to be responsible
//    for creating the piece of state to keep track of the modal state
// - This component should not be the one to track wether right now the modal should be displayed or not
// - The modal component itself should actually know wether it is currently open or not.
// - The Modal should keep this state internally

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>Add new cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
