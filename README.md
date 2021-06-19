# social-frontend

Frontend do projeto ClintSite

## Components

### Button

| Props    | Description        | Tipo          |
| -------- | ------------------ | ------------- |
| Children | Elemento React     | React Element |
| loading  | Se está carregando | boolean       |

### Card

Card de Cliente
| Props | Description | Tipo
| -------------------------- | ------------------------------|-----------------
| name | nome do card| String
| id | id do card| number
| logo | Url da imagem do artigo| String

### DeleteItem

Modal de Deletar Item
| Props | Description | Tipo
| -------------------------- | ------------------------------|-----------------
| handleDeleteItem | função que será chamada para deletar o item| function
| handleNotDeleteItem | função que será chamada caso não deletar o item| function

### EditPost

Modal de Ediar Post
| Props | Description | Tipo
| -------------------------- | ------------------------------|-----------------
| saveClient | função que será chamada para salvar o item| function

### NewClient

Modal de criar novo Cliente
| Props | Description | Tipo
| -------------------------- | ------------------------------|-----------------
| saveClient | função que será chamada para salvar o item| function
| editClient | objeto edit e client| {edit:boolean, client:number}
| handleClose | função que será chamada quando fechar o modal| function

### NewPost

Modal para criar novo post
| Props | Description | Tipo
| -------------------------- | ------------------------------|-----------------
| saveClient | função que será chamada para salvar o item| function
