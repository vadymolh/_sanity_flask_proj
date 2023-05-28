export default {
    name: "post",
    type: "document",
    title: "Пости",
    fields: [{
        name: "title",
        type: "string",
        title: "Заголовок"

    }, 
    {
        name: "content",
        type: "string",
        title: "Текст поста"
    }, 
    {
        name: "image",
        type: "image",
        title: "Зображення для обкладинки"
    }]
}