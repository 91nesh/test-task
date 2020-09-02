import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

const Friends = ({ image, name, age, dob }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            className="custom-modal"
            size="mini"
            trigger={<Image src={image} wrapped ui={false} />}
        >
            <Modal.Header>User Details</Modal.Header>
            <Modal.Content image>
                <Image src={image} wrapped ui={false} />
                <Modal.Description>
                    <h4><b>Name: {name}</b></h4>
                    <p className="m-0" >Age: {age}</p>
                    <p className="m-0">Date of Birth: {dob}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button positive onClick={() => setOpen(false)}>Okay</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Friends