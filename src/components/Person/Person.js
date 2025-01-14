import React from 'react'
import {Link} from 'react-router-dom'
import * as PropTypes from 'prop-types'
import Card from '../Card'

const Person = ({person}) => (
  <Card>
    <Card.Avatar
      photoUrl={person.photo}
      altText={`photo of ${person.firstname}`}
    />
    <Card.Title
      mainTitle={
        <Link to={`/person/${person.id}`}>
          {person.firstname} {person.lastname}
        </Link>
      }
      subTitle={person.entity}
    />
    <Card.Info icon="email">
      <a href={`mailto:${person.email}`}>{person.email}</a>
    </Card.Info>
    <Card.Info icon="phone">
      <a href={`tel:${person.phone}`}>{person.phone}</a>
    </Card.Info>
    {person.managerId && (
      <Card.Info icon="supervisor_account" desc="manager">
        <a href={`/person/${person.managerId}`}>{person.manager}</a>
      </Card.Info>
    )}
  </Card>
)

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    entity: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    managerId: PropTypes.string,
    manager: PropTypes.string,
  }),
}

export default Person
