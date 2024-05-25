import CloseButton from "../components/CloseButton";
import Modal from "../components/Modal";
import TermsContent from "../components/TermsContent";


export default function Privacity () {
    return (
        <Modal>
            <TermsContent />
            <CloseButton />
        </Modal>
    )
}