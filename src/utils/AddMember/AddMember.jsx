import React from 'react'
import Button from '../../components/Button/Button'
import { FlexCol, FormBox } from './AddMember.styles'

const AddMember = () => {
    return (
        <div>

            <FormBox>
                <h2>Add Member Form</h2>
                <FlexCol>
                    <div className='form-row'>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>

                </FlexCol>
                <FlexCol>
                    <div className='form-row'>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="">Designation</label>
                        <input type="text" />
                    </div>

                </FlexCol>
                <FlexCol>
                    <div className='form-row'>
                        <label htmlFor="">Employee ID</label>
                        <input type="text" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="">Joined</label>
                        <input type="text" />
                    </div>

                </FlexCol>
                <FlexCol>
                    <div className='form-row'>
                        <label htmlFor="">Grade</label>
                        <input type="text" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="">Department</label>
                        <input type="text" />
                    </div>

                </FlexCol>
                <FlexCol>
                    <div className='form-row'>
                        <label htmlFor="">Stream</label>
                        <input type="text" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="">Virtual Team</label>
                        <input type="text" />
                    </div>

                </FlexCol>
                <div>
                    <Button>Submit</Button>
                </div>
            </FormBox>
        </div>
    )
}

export default AddMember