import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';
import { CreateProductDto } from './dto/create-product.dto';
import { User } from '../common/decorators/user.decorator';
import { PublicUser } from '../users/entities/public-user.entity';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
    }

    @Post()
    @ApiCreatedResponse({
        description: 'Create new product',
        type: Product,
    })
    @UseGuards(JwtAuthGuard)
    public async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get()
    public async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
