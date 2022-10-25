<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class FormationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'titre' =>$this->faker->word,
             'description' =>$this->faker->sentence, 
          
            'date_debut'=>$this->faker->date($format = 'Y-m-d', $max = 'now'),  
             'date_fin' =>$this->faker->date($format = 'Y-m-d', $max = 'now'),   
            'etat' =>$this->faker->boolean,   
             'nbr_place' =>$this->faker->randomNumber(),
             'prix' =>$this->faker->randomFloat($nbMaxDecimals=2, $min = 0, $max = 500),
             'created_at'=>now()  
        ];
    }
}
