import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ReadMoreText from './ReadMoreText';

const ArticleCard = ({ image, description, author }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Description>
        Description
      </Card.Description>
      <ReadMoreText minHeight="90px" text={description} />
      <Card.Description>
        Author
      </Card.Description>
      <Card.Meta>
        {author}
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default ArticleCard;