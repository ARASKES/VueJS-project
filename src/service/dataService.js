import axios from '@/axios';

/**
 * Отправляет запрос на получение всего списка Todo
 */
export async function fetchTodos() {
    try {
        const response = await axios.get('/todos');
        return response?.data?.todos ?? [];
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

/**
 * Отправляет запрос на создание Todo
 */
 export async function createTodo({title, isCompleted = false}) {
    try {
        const response = await axios.post('/todos', {
            title
        });
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

/**
 * Отправляет запрос на удаление Todo по id
 */
 export async function deleteTodoById(id) {
    try {
        const response = await axios.delete('/todos/' + id);
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

/**
 * Отправляет запрос на удаление всех Todo
 */
 export async function deleteTodos() {
    try {
        const response = await axios.delete('/todos');
        return response?.data?.todos ?? [];
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

/**
 * Отправляет запрос на обновление Todo по id
 */
 export async function patchTodo({id, isCompleted}) {
    try {
        const response = await axios.patch('/todos/' + id, {
            isCompleted
        });
        return response?.data ?? {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}
